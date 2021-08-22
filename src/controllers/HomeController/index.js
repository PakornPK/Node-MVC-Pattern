/**
 * It Home Controller
 * @class
 */
class HomeController {
  /**
   * It not return
   * console log hello home page
   * @method
   * @name sayHello
   * @param {express.Request} req
   * @param {express.Response} res
   */
  static async sayHello(req, res) {
    return res.send(`Say Hello Home page`);
  }
}

module.exports = HomeController;
