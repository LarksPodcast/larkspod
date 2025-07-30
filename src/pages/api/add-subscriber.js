export default async function handler(req,res) {
    if (req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }
    try {
        const {email} = req.body;
        const response = await fetch("https://api.getresponse.com/v3/contacts", {
        method: 'POST', //req.method,
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": `api-key ${process.env.NEXT_PUBLIC_LARKS_NEWSLETTER_API_KEY}`,
        },
        body: JSON.stringify({
          email: req.body.email,
          campaign: { campaignId: 'iKUzw'}
        }),
      });
    
      if (response.status === 202) {
        return  res.status(response.status).json({
            status: response.status,
            statusText: "Accepted",
            message: "Data has been validated and added to queue",
        });
    
      }
    
      if (response.status === 409) {
        return  res.status(response.status).json({
            status: response.status,
            statusText: "Conflict",
            message: "There seem to be a conflict with an existing data",
        });
    
      }
    
      return  res.status(response.status).json({
          status: response.status,
          statusText: "Error from API",
          message: await response.text(),
        });
    } catch (e) {
      return res.status(500).json({
        status: 500,
        statusText: "Internal server error",
        message: "There seem to be a server problem",
        error: "e.message",
      });
    };
  }
  