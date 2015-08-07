import React from 'react';
export default class RightBar extends React.Component {
  render() {
    return (
      <aside className="control-sidebar control-sidebar-dark">
        <ul className="nav nav-tabs nav-justified control-sidebar-tabs">
          <li className="active"><a href="#control-sidebar-home-tab" data-toggle="tab"><i className="fa fa-magic"></i></a></li>
          <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i className="fa fa-share-square"></i></a></li>
        </ul>
        <div className="tab-content">
          <div className="tab-pane active" id="control-sidebar-home-tab">
            <h3 className="control-sidebar-heading">Install <strong>Mouthy</strong>Bar</h3>
            <ul className="control-sidebar-menu">
              <li>
                <a href="javascript::;">
                  <i className="menu-icon fa fa-code bg-red"></i>
                  <div className="menu-info">
                    <h4 className="control-sidebar-subheading">Click to copy code</h4>
                    <p>paste above site's closing body tag</p>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <pre>
                    <code className="language-markup">
                      &lt;script type="text/javascript" src="http://localhost:3000/mouthy.js">&lt;/script>
                      &lt;script type="text/javascript">
                         MOUTHYBAR.init(['#444444','#333333', 234542]);
                         MOUTHYBAR.loadMouthy();
                      &lt;/script>
                    </code>
                  </pre>
                </a>
              </li>
            </ul>
            <h3 className="control-sidebar-heading">Customize</h3>
            <ul className="control-sidebar-menu">
              <li>
                <a href="#">
                  <h4 className="control-sidebar-subheading">Background color:</h4>
                  <div className="input-group">
                    <span className="input-group-addon">#</span>
                    <input id="background_color" type="text" className="form-control" placeholder="#45676" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4 className="control-sidebar-subheading">Text color:</h4>
                  <div className="input-group">
                    <span className="input-group-addon">#</span>
                    <input id="text_color" type="text" className="form-control" placeholder="#456789" />
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h4 className="control-sidebar-subheading">Choose style:</h4>
                  <div className="form-group">
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                        Top Bar
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                        Bottom Bar
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                        Bottom Right
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios3" value="option3" />
                        Bottom Left
                      </label>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                <button className="btn-block btn-info" >
                  Update Styling
                </button>
                </a>
              </li>
            </ul>
          </div>
          <div className="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div>
          <div className="tab-pane" id="control-sidebar-settings-tab">
            <form method="post">
              <h3 className="control-sidebar-heading">Share <strong>Mouthy</strong>Bar</h3>
              <div className="text-center">
                <a className="btn btn-social-icon btn-facebook"><i className="fa fa-facebook"></i></a>
                <a className="btn btn-social-icon btn-google"><i className="fa fa-google-plus"></i></a>
                <a className="btn btn-social-icon btn-linkedin"><i className="fa fa-linkedin"></i></a>
                <a className="btn btn-social-icon btn-twitter"><i className="fa fa-twitter"></i></a>
              </div>
            </form>
          </div>
        </div>
      </aside>
      )
  }
}