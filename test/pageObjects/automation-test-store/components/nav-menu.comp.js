class NavComponent {
  get navHeaderLinks() {
    return $("//span[text()='Cart']");
  }
}
export default new NavComponent();
