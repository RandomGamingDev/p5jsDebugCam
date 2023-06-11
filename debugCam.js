class DebugCam {
  constructor(cam, moveSpeed, turnSpeed) {
    this.cam = cam;
    this.moveSpeed = moveSpeed;
    this.turnSpeed = turnSpeed;
  }
  
  takeInput() {
    switch (keyCode) {
      case 87:
        this.cam.move(0, 0, -moveSpeed);
        break;
      case 83:
        this.cam.move(0, 0, moveSpeed);
        break;
      case 65:
        this.cam.move(-moveSpeed, 0, 0);
        break;
      case 68:
        this.cam.move(moveSpeed, 0, 0);
        break;
      case 32:
        this.cam.move(0, -moveSpeed, 0);
        break;
      case 16:
        this.cam.move(0, moveSpeed, 0);
        break;
      case 38:
        this.cam.tilt(-turnSpeed);
        break;
      case 40:
        this.cam.tilt(turnSpeed);
        break;
      case 37:
        this.cam.pan(turnSpeed);
        break;
      case 39:
        this.cam.pan(-turnSpeed);
        break;
    }
  }
}
