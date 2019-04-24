import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavPinterest from './nav.js'
import ImageApi from './galeryimg.js'


Enzyme.configure({ adapter: new Adapter() });


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavPinterest/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Se abre el modal y se muestra imagen',() => {
const modalrender = Enzyme.mount(<App/>)
const clickModal = modalrender.instance();

clickModal.openmodal({
  "descriptionImg": "clothing items and pair of shoes in luggage",
  "imageURL" :"https://images.unsplash.com/photo-1526857240824-92be52581d9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjY1NTU3fQ",
  "titlephoto": "Hello Its LOH www.HelloItsLOH.com",
})

modalrender.update();
// modalrender.find('Modal').find('.containerModal').simulate('click');
expect(modalrender.state().modal).toBe('https://images.unsplash.com/photo-1526857240824-92be52581d9b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjY1NTU3fQ')

});

it('al hacer click en la imagen aparece el modal', () =>{
  const modalrenderfetch = Enzyme.mount(<App/>);
  const clickModalFetch = modalrenderfetch.find('ImageApi');
  const functionImg = clickModalFetch.instance();

}
)