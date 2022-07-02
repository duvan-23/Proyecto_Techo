// import { CFooter } from '@coreui/react'


// export const Footer = () => {
//   return (
//     <CFooter>
//         <div>
//             {/* <CLink href="https://coreui.io">CoreUI</CLink> */}
//             <span>&copy; 2021 creativeLabs.</span>
//         </div>
//         <div>
//             <span>Powered by</span>
//             {/* <CLink href="https://coreui.io">CoreUI</CLink> */}
//         </div>
//     </CFooter>
//   );
// };
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';


export const Footer = () => {
  return (
    <MDBFooter className='text-center text-white' style={{backgroundColor: 'rgba(0, 123, 255, 0.9)' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1 mr-2 ico' href='#!' role='button'style={{'borderRadius':'6px'}}>
            <MDBIcon fab icon='facebook-f' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1 mr-2' href='#!' role='button'style={{'borderRadius':'6px'}}>
            <MDBIcon fab icon='twitter' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1 mr-2' href='#!' role='button'style={{'borderRadius':'6px'}}>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1 mr-2' href='#!' role='button'style={{'borderRadius':'6px'}}>
            <MDBIcon fab icon='instagram' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1 mr-2' href='#!' role='button'style={{'borderRadius':'6px'}}>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1 mr-2' href='#!' role='button'style={{'borderRadius':'6px'}}>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 123, 255, 1)' }}>
        © Copyright 2022,{'\u00A0'}
        <a className='text-white' href='https://www.linkedin.com/in/joaquin1998/'>
          Joaquin Toledo
        </a>
        {'\u00A0'}{'\u00A0'} & {'\u00A0'}{'\u00A0'}
        <a className='text-white' href='https://www.linkedin.com/in/duvan-albeiro-mendivelso-caicedo-45a803122/'>
          Duvan Caicedo
        </a>
      </div>
    </MDBFooter>
  );
}