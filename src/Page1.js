import React from 'react';
import './App.css';

const Page1 = () => (
  <div id="body">
    <div style={{flexDirection: 'column'}}>
      <div style={{backgroundColor: "#f4f5f6", alignItems: 'center', justifyContent: 'center', padding: 50, margin: 10}}>
        <h1>
          Main Page Heading
        </h1>
        <h4>Page Subheading</h4>
      </div>
      <div style={{backgroundColor: "#f4f5f6", alignItems: 'center', justifyContent: 'center', margin: 10}}>
        <div style={{flexDirection: 'row', alignContent: 'space-between'}}>
          <button style={{alignContent: 'space-between', marginLeft: 50, marginRight: 50}}>Link1</button>
          <button style={{alignContent: 'space-between', marginLeft: 50, marginRight: 50}}>Link2</button>
          <button style={{alignContent: 'space-between', marginLeft: 50, marginRight: 50}}>Link3</button>
          <button style={{alignContent: 'space-between', marginLeft: 50, marginRight: 50, marginTop: 10}}>Link4</button>
        </div>
      </div>
      <div style={{backgroundColor: "#f4f5f6", alignItems: 'center', justifyContent: 'center', margin: 10, paddingBottom: 10}}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', alignContent: 'space-between', flexWrap: 'wrap', padding: 15}}>
          <div style={{flex: 1, backgroundColor: "#cccccc", marginRight: 15, padding: 10}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales rhoncus dui, a dignissim massa vestibulum in. Proin eu nulla varius, mollis ipsum ut, porttitor leo. Donec nisl tellus, rhoncus ac varius et, venenatis ac lorem. Ut sapien magna, lobortis sed turpis non, maximus molestie tellus. Quisque neque lectus, ornare eget dolor a, imperdiet tincidunt elit. Integer at nulla at felis tincidunt scelerisque. Mauris sed augue orci. Ut non luctus velit. Suspendisse porttitor mauris nec sem rutrum convallis eu imperdiet leo.
            </p>
          </div>
          <div style={{flex: 1, backgroundColor: "#cccccc", marginLeft: 15, padding: 10}}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales rhoncus dui, a dignissim massa vestibulum in. Proin eu nulla varius, mollis ipsum ut, porttitor leo. Donec nisl tellus, rhoncus ac varius et, venenatis ac lorem. Ut sapien magna, lobortis sed turpis non, maximus molestie tellus. Quisque neque lectus, ornare eget dolor a, imperdiet tincidunt elit. Integer at nulla at felis tincidunt scelerisque. Mauris sed augue orci. Ut non luctus velit. Suspendisse porttitor mauris nec sem rutrum convallis eu imperdiet leo.
            </p>
          </div>
        </div>
        <div style={{flex: 1, backgroundColor: "#cccccc", marginLeft: 15, marginRight: 15, padding: 10}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales rhoncus dui, a dignissim massa vestibulum in. Proin eu nulla varius, mollis ipsum ut, porttitor leo. Donec nisl tellus, rhoncus ac varius et, venenatis ac lorem. Ut sapien magna, lobortis sed turpis non, maximus molestie tellus. Quisque neque lectus, ornare eget dolor a, imperdiet tincidunt elit. Integer at nulla at felis tincidunt scelerisque. Mauris sed augue orci. Ut non luctus velit. Suspendisse porttitor mauris nec sem rutrum convallis eu imperdiet leo.
        </p>
        </div>
        <div style={{display: 'flex', backgroundColor: "#f4f5f6", alignItems: 'center', justifyContent: 'center', textAlign: 'center'
        , margin: 10 }}>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',textAlign: 'center', padding: 15}}>

          <div id="pic500500" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 20, marginRight: 20}}>
            <p style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>500x500</p>
          </div>
          <div id="pic500500" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 20, marginRight: 20}}>
            <p style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>500x500</p>
          </div>
          <div id="pic500500" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 20, marginRight: 20}}>
            <p style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>500x500</p>
          </div>
          <div id="pic500500" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 20, marginRight: 20}}>
            <p style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>500x500</p>
          </div>
          <div id="pic500500" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 20, marginRight: 20}}>
            <p style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>500x500</p>
          </div>
          <div id="pic500500" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 20, marginRight: 20}}>
            <p style={{textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>500x500</p>
          </div>

          </div>
        </div>
        <div style={{flex: 1, backgroundColor: "#cccccc", marginLeft: 15, marginRight: 15, padding: 10}}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sodales rhoncus dui, a dignissim massa vestibulum in. Proin eu nulla varius, mollis ipsum ut, porttitor leo. Donec nisl tellus, rhoncus ac varius et, venenatis ac lorem. Ut sapien magna, lobortis sed turpis non, maximus molestie tellus. Quisque neque lectus, ornare eget dolor a, imperdiet tincidunt elit.
        </p>
        </div>
      </div>
    </div>
  </div>
);

export default Page1;
