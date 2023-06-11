class DebugCam {
  constructor(cam, moveSpeed, turnSpeed) {
    this.cam = cam;
    this.moveSpeed = moveSpeed;
    this.turnSpeed = turnSpeed;
  }
  
  takeInput() {
    switch (keyCode) {
      case 87:
        this.cam.move(0, 0, -this.moveSpeed);
        break;
      case 83:
        this.cam.move(0, 0, this.moveSpeed);
        break;
      case 65:
        this.cam.move(-this.moveSpeed, 0, 0);
        break;
      case 68:
        this.cam.move(this.moveSpeed, 0, 0);
        break;
      case 32:
        this.cam.move(0, -this.moveSpeed, 0);
        break;
      case 16:
        this.cam.move(0, this.moveSpeed, 0);
        break;
      case 38:
        this.cam.tilt(-this.turnSpeed);
        break;
      case 40:
        this.cam.tilt(this.turnSpeed);
        break;
      case 37:
        this.cam.pan(this.turnSpeed);
        break;
      case 39:
        this.cam.pan(-this.turnSpeed);
        break;
    }
  }
}
