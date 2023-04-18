export default class AudioPlayerClass {
  protected audioUrl: string;
  protected audio: HTMLAudioElement;
  protected currentTimeIntervalID: any;
  protected audioProgressIntervalID: any;

  constructor(audioUrl: string) {
    this.audioUrl = audioUrl;
    this.audio = new Audio(this.audioUrl);
  }

  // Set volume and duration when loaded
  // Insert into element with '.time .length' class
  public handleAudioLength = (node: any) => {
    this.audio.addEventListener("loadeddata", () => {
      this.audio.volume = 0.75;
      node.innerHTML = this.getTimeCodeFromNum(this.audio.duration);
    });
  };

  // Click on timeline to skip on element with '.timeline' class
  public handleAudioTimeline = (event: any) => {
    const timelineWidth = window.getComputedStyle(event.target).width;
    const timeToSeek =
      (event.nativeEvent.offsetX / parseInt(timelineWidth)) *
      this.audio.duration;
    this.audio.currentTime = Math.floor(timeToSeek);
  };

  // Set click
  // Click volume slider to change volume on element with '.controls .volume-slider' class
  public handleAudioVolumeSlider = (event: any) => {
    const sliderWidth = window.getComputedStyle(event.target).width;
    const newVolume = event.nativeEvent.offsetX / parseInt(sliderWidth);
    this.audio.volume = newVolume;
    const volumePercentage = newVolume * 100 + "%";

    // Show new volume percentage
    this.handleAudioVolumePercentage(undefined, volumePercentage);
  };

  // Click volume slider to change volume on element with '.controls .volume-percentage' class
  protected handleAudioVolumePercentage = (event: any, percentage: string) => {
    event.target.style.width = percentage;
  };

  // Update audio progress
  // Load audio progress on element with '.progress' class
  public handleAudioProgress = (elementNode: any) => {
    if (elementNode) {
      this.audio.addEventListener(
        "playing",
        this.updateAudioProgress.bind(this, elementNode)
      );
    }
  };

  private updateAudioProgress = (elementNode: any) => {
    let node = elementNode;

    if (!this.audioProgressIntervalID) {
      this.audioProgressIntervalID = setInterval(() => {
        node.style.width = `${
          (this.audio.currentTime / this.audio.duration) * 100
        }%`;
      }, 500);
    }
  };

  // Update audio time
  // Load audio current time on element with '.time .current' class
  public handleAudioCurrentTime = (elementNode: any) => {
    if (elementNode) {
      this.audio.addEventListener(
        "playing",
        this.updateCurrentTimeInterval.bind(this, elementNode)
      );
    }
  };

  private updateCurrentTimeInterval = (elementNode: any) => {
    let node = elementNode;

    if (!this.currentTimeIntervalID) {
      this.currentTimeIntervalID = setInterval(() => {
        node.textContent = this.getTimeCodeFromNum(this.audio.currentTime);
      }, 500);
    }
  };

  // Toggle between play and pause of audio
  // Play/pause audio on element with '.controls .toggle-play' class
  public handleAudioPlaybackToggle = (node: any) => {
    if (this.audio.paused) {
      this.audio.play();
      node.textContent = "pause";
      return;
    }

    // node.classList.remove("pause");
    // node.classList.add("play");
    this.audio.pause();
    node.textContent = "play_arrow";

    // Clear current time interval
    clearInterval(this.currentTimeIntervalID);
  };

  public handleAudioMute = (node: any) => {
    if (this.audio.muted) {
      this.audio.muted = false; // Unmute audio
      node.textContent = "volume_up";
      console.log("volume muted", node.textContent);
    } else {
      this.audio.muted = true; // Mute volume
      node.textContent = "volume_off";
      console.log("volume unmuted ->", node.textContent);
    }
  };

  // Turn duration (in seconds) into minutes
  protected getTimeCodeFromNum = (arg: number) => {
    let seconds = arg;
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    seconds -= minutes * 60;
    minutes -= hours * 60;

    if (hours === 0) {
      return `${minutes}:${Math.floor(seconds % 60)}`;
    }

    return `${hours}:${minutes}:${Math.floor(seconds % 60)}`;
  };
}

export function audioPlayer(audioUrl: string) {
  const playerInstance = new AudioPlayerClass(audioUrl);

  return playerInstance;
}
