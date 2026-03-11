const commentInput = document.getElementById("commentInput"); // Input field where user types the command.
const runButton = document.getElementById("runButton"); // Button that user clicks to execute the command. Also there is another wat to execute the command, by pressing "Enter" key. I've added event listener.
const stopButton = document.getElementById("stopButton"); // Button that user clicks to stop the animation and set robot to stand pose.
const robotImage = document.querySelector("#robot img"); // Image element where robot's animation frames are displayed. I've used querySelector to select the img element inside the element with id "robot".
const commandRegex = /^robotto\.(walk|wave|jump)\(\)$/; // Regular expression to validate the command format. It checks if command starts with "robotto.", and use one of the actions followed by "()" at the end.

const frameSets = {
  walk: ["./kuvat/walk1.png", "./kuvat/walk2.png"],
  wave: [
    "./kuvat/wave1.png",
    "./kuvat/wave2.png",
    "./kuvat/wave3.png",
    "./kuvat/wave4.png",
    "./kuvat/wave5.png",
  ],
  jump: ["./kuvat/jump1.png", "./kuvat/jump2.png", "./kuvat/jump3.png"],
}; // Object that contains the animation frames for each action. Each action in the object is an array of image paths that should be displayed in sequence to create the animation effect.

let animationTimer = null;

function setStandPose() {
  robotImage.src = "./kuvat/stand.png";
} // Function to set the robot to stand pose. It changes the image source to the stand pose image.

function stopAnimation() {
  if (animationTimer !== null) {
    clearInterval(animationTimer);
    animationTimer = null;
  }
  setStandPose();
} // Function to stop the animation. It clears the interval timer that is used to change the animation frames, and the sets the robot to stand pose.

function playAnimation(action) {
  stopAnimation();

  const frames = frameSets[action];
  let frameIndex = 0;

  robotImage.src = frames[frameIndex];

  animationTimer = setInterval(() => {
    frameIndex = frameIndex + 1;
    if (frameIndex >= frames.length) {
      frameIndex = 0;
    } // also I could use modulo operator here: frameIndex = (frameIndex + 1) % frames.length; This way it will automatically reset to 0 when it reaches the length of frames array. But I decided to use this way to make it easier to understand.
    robotImage.src = frames[frameIndex];
  }, 180);
} // Function to play the animation based on the action. Firstly it stops any ongoing animation, then it retrieves the frames for the specified action from the frameSets object.

function runCommand() {
  const command = commentInput.value.trim();
  const match = command.match(commandRegex);

  if (!match) {
    alert(
      "Invalid command. Use: robotto.walk(), robotto.wave(), robotto.jump()",
    );
    return;
  }

  playAnimation(match[1]);
} // Function to run the command. It retrieves the command from the input field, trims it to remove whitespace, and checks if it matches the commandRegex. If it doesn't match, it shows an alert with the valid command formats. If it matches, it extracts the action (walk, wave, or jump) from the regex match and calls the playAnimation function with the corresponding action.

commentInput.addEventListener("input", () => {
  commentInput.style.color = commandRegex.test(commentInput.value.trim()) // Tests the input against the commandRegex, that is've set in the begining. Sets text color to green if valid and red if invalid. Also trims the input to ignore whitespaces.
    ? "green"
    : "red";
}); // Event listener for the input event on the commentInput field. It checks the validity of the command and changes the text color accordingly.

commentInput.addEventListener("keydown", (event) => {
  // Command is also executing when user presses "Enter" key. This is done by listening to "keydown" event.
  if (event.key === "Enter") {
    runCommand();
  }
});

runButton.addEventListener("click", runCommand);
stopButton.addEventListener("click", stopAnimation); // Event listeners for the run and stop buttons.
