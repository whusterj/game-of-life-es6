
// Base class for component, which handles 
function Component (definition) {

  var exports = {
    getClass: getClass,
    getFactory: getFactory
  }  
  
  return exports;
  
  function getClass () {
    return React.createClass(definition);
  }
  
  function getFactory () {
    return React.createFactory(this.getClass());
  }
  
}

function ButtonComponent () {

  var button = Object.create(
    Component({
      render: render
    }));

  return button;

  function render () {
    return React.DOM.button(
      null,
      this.props.label || 'No Label'
    );
  }

}