export default class DialogService {
  constructor(opts) {
    this.visible = false;
    this.title = opts.title;
  }

  open(callback) {
    this.visible = true;
    this.submit = callback;
  }
  close() {
    this.visible = false;
  }
  submit() {}
}
