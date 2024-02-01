import Directory from './Directory'
import './CSS/Profile.css'
function Profile() {
  return (
    <div className='common-port' style={{backgroundColor:'black'}}>
      <div>
      <Directory/>
      </div>
      <h1>&nbsp;</h1>
      <h1>&nbsp;</h1>
      <div className='portfolio' style={{ color:'white',paddingLeft:'10px'}}>
        <h1>Profile</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse blanditiis iusto, odit praesentium asperiores expedita error debitis necessitatibus voluptatem reiciendis, fuga velit doloribus amet? Consectetur sapiente impedit tempore blanditiis rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, necessitatibus fuga? Dolores ipsam nesciunt explicabo necessitatibus laboriosam, consequatur dolore itaque vitae tempore ipsa sapiente cupiditate est quasi qui, sint ducimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae est error nulla dolores itaque quisquam ut quaerat! Repellendus nulla ipsa corrupti omnis! Debitis voluptatum possimus deserunt nam eligendi dolores.</p>
      </div>
    </div>
  )
}

export default Profile