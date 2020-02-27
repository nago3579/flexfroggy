import React from 'react';
import './App.css';

const Page3 = () => (
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
    <div id="body">
      <div style={{flexDirection: 'row'}}>
        <div style={{display: "flex", flexDirection: 'row', backgroundColor: "#f4f5f6", alignItems: 'flex-start', justifyContent: 'center', padding: 50, margin: 10}}>

          <div style={{flex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start'}}>
            <div id="picW" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 15, marginRight: 15}}>
              <p>1000x500</p>
            </div>
            <p style={{padding:20, textAlign: 'left'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel nibh auctor risus commodo pharetra. Praesent a dapibus libero. Nullam magna mauris, pharetra at lectus nec, varius lacinia purus. Cras vitae luctus ex, molestie ullamcorper justo. Quisque sed enim nibh. Nullam erat ipsum, vehicula sit amet purus sed, fringilla semper odio. Proin a condimentum lacus, sit amet aliquet justo. Vestibulum tempor, erat ac placerat tincidunt, erat mauris convallis tortor, sed dapibus tortor enim in orci. Sed accumsan justo at nisl venenatis tempus. In consectetur eu diam id rhoncus. Etiam id lacus tincidunt, porta dolor quis, mattis odio. Vivamus sagittis massa id dolor vehicula, at tristique neque ullamcorper. Vivamus accumsan risus ante, a ultrices lorem finibus sed. Fusce et facilisis nisl, condimentum dapibus augue.
            </p>
            <div style={{display: "flex", flexDirection: 'row'}}>
              <p style={{flex: 1, textAlign: 'left', paddingLeft: 10, paddingRight: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porttitor orci. Morbi lobortis, tortor et hendrerit gravida, enim tortor pulvinar erat, at vestibulum augue turpis sit amet erat. Nunc elit est, tempus id luctus a, ornare id augue.
              </p>
              <p style={{flex: 1, textAlign: 'left', paddingLeft: 10, paddingRight: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porttitor orci. Morbi lobortis, tortor et hendrerit gravida, enim tortor pulvinar erat, at vestibulum augue turpis sit amet erat. Nunc elit est, tempus id luctus a, ornare id augue.
              </p>
              <p style={{flex: 1, textAlign: 'left', paddingLeft: 10, paddingRight: 10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec porttitor orci. Morbi lobortis, tortor et hendrerit gravida, enim tortor pulvinar erat, at vestibulum augue turpis sit amet erat. Nunc elit est, tempus id luctus a, ornare id augue.
              </p>
            </div>
          </div>

          <div style={{flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <div id="picMS" style={{display: 'flex', textAlign: 'center', backgroundColor: "#cccccc", marginLeft: 15, marginRight: 15}}>
              <p>500x500</p>
            </div>
            <ul style={{padding: 20}}>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
              <li>item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Page3;
