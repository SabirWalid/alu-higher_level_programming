#!/usr/bin/node

module.exports = class Rectangle {
  constructor(w, h) {
    if (w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    } else {
      // if w or h is not a positive integer or equal to 0, create an empty object
      this.width = 0;
      this.height = 0;
    }
  }

  print() {
    if (this.width === 0 || this.height === 0) {
      return;
    }

    for (let i = 0; i < this.height; i++) {
      console.log("X".repeat(this.width));
    }
  }

  rotate() {
    if (this.width === 0 || this.height === 0) {
      return;
    }

    const temp = this.width;
    this.width = this.height;
    this.height = temp;
  }

  double() {
    if (this.width === 0 || this.height === 0) {
      return;
    }

    this.width = this.width * 2;
    this.height = this.height * 2;
  }
};
