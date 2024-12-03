import React from 'react'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/esm/Col';
Col


function Landing() {
  return (
    <>
     <div className='col-lg-12 ' >
     <Image style={{width:'100%',height:'500px',}}  src="https://www.grayline.com/wp-content/uploads/2022/10/gray-line-san-francisco-rome-new-york-paris-berlin-worldwide-web-1536x487.jpg" fluid />

     <div>
       <h1 className='fw-bold  align-items-center justify-content-center mt-5 shadow ' style={{textAlign:'center',color:'lightskyblue'}}>BEST GLOBAL DESTINATIONS</h1>
     </div>

     <div className='d-flex align-items-center justify-content-center p-1 '>
      
     <Card className='m-2 shadow' style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=300&h=300&s=1 " />
      <Card.Body>
        <Card.Title className='fw-bold 'style={{color:'lightskyblue'}}>PARIS</Card.Title>
        <Card.Text style={{color:'brown'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button className='shadow ' style={{backgroundColor:'lightskyblue'}}>BOOK NOW</Button>
      </Card.Body>
    </Card>

    <Card className='m-2 shadow'  style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=300&h=300&s=1" />
      <Card.Body>
        <Card.Title className='fw-bold 'style={{color:'lightskyblue'}}>LONDON</Card.Title>
        <Card.Text style={{color:'brown'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='shadow' style={{backgroundColor:'lightskyblue'}}>BOOK NOW</Button>
      </Card.Body>
    </Card>

    <Card className='m-2 shadow'  style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c5/7c/68/caption.jpg?w=300&h=300&s=1&cx=950&cy=1766&chk=v1_9ee2771da71f55a7ac6a" />
      <Card.Body>
        <Card.Title className='fw-bold 'style={{color:'lightskyblue'}}>NEW YORK CITY</Card.Title>
        <Card.Text style={{color:'brown'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='shadow'style={{backgroundColor:'lightskyblue'}}>BOOK NOW</Button>
      </Card.Body>
    </Card>

    
     </div>

     <div className='d-flex align-items-center justify-content-center p-1 '>
     <Card className='m-2 shadow' style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/c9/6c/08/caption.jpg?w=300&h=300&s=1 " />
      <Card.Body>
        <Card.Title className='fw-bold 'style={{color:'lightskyblue'}}>ROME</Card.Title>
        <Card.Text style={{color:'brown'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='shadow' style={{backgroundColor:'lightskyblue'}}>BOOK NOW</Button>
      </Card.Body>
    </Card>

    <Card className='m-2 shadow'  style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/74/c9/cf/caption.jpg?w=300&h=300&s=1&pcx=1097&pcy=742&pchk=v1_15125732981dc7cf7364" />
      <Card.Body>
        <Card.Title className='fw-bold 'style={{color:'lightskyblue'}}>AMSTERDAM</Card.Title>
        <Card.Text style={{color:'brown'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='shadow' style={{backgroundColor:'lightskyblue'}}>BOOK NOW</Button>
      </Card.Body>
    </Card>

    <Card className='m-2 shadow'  style={{ width: '23rem' }}>
      <Card.Img variant="top" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/46/lisbon.jpg?w=300&h=300&s=1" />
      <Card.Body>
        <Card.Title className='fw-bold 'style={{color:'lightskyblue'}}>LISBON</Card.Title>
        <Card.Text style={{color:'brown'}}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button  className='shadow' style={{backgroundColor:'lightskyblue'}}>BOOK NOW</Button>
      </Card.Body>
    </Card>

    
     </div>
     <div>
       <h1 className='fw-bold  align-items-center justify-content-center mt-5 shadow ' style={{textAlign:'center',color:'lightskyblue'}}>Plan, Book, Go—We Make It Easy</h1>
     </div>
     <div className='d-flex align-items-center justify-content-center p-1'>

     <Card className='m-2 '  style={{ width: '23rem',borderColor:'white' }}>
     <Col xs={6} md={4}>
          <Image className='align-items-center justify-content-center 'style={{alignItems:'center',justifyContent:'center',marginLeft:'65%'}} src="https://th.bing.com/th/id/OIP.t6338OygJjSsULRojIrCsAHaHa?w=200&h=200&c=7&r=0&o=5&pid=1.7 rounded "/>
        </Col>
      <Card.Body>
        <Card.Title className='fw-bold align-items-center justify-content-center mt-3'style={{color:'lightskyblue',justifyContent:'center',alignItems:'center',marginLeft:'20%'}}>Backed by travellers</Card.Title>
        <Card.Text  style={{color:'brown'}}>
        See what people loved (or didn’t love) with real reviews on almost everything.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='m-2 '  style={{ width: '23rem',borderColor:'white' }}>
     <Col xs={6} md={4}>
          <Image className='align-items-center justify-content-center 'style={{alignItems:'center',justifyContent:'center',marginLeft:'65%'}} src="https://th.bing.com/th/id/OIP.LxgAvERzrDYSGZ__IYTNuAHaHa?w=182&h=182&c=7&r=0&o=5&pid=1.7 rounded "/>
        </Col>
      <Card.Body>
        <Card.Title className='fw-bold align-items-center justify-content-center mt-4'style={{color:'lightskyblue',justifyContent:'center',alignItems:'center',marginLeft:'20%'}}>Free cancellation</Card.Title>
        <Card.Text  style={{color:'brown'}} >
        Go with the flow. Most experiences can be cancelled up to 24 hours before.
        </Card.Text>
        
      </Card.Body>
    </Card>

    <Card className='m-2 '  style={{ width: '23rem',borderColor:'white' }}>
     <Col xs={6} md={4}>
          <Image className='align-items-center justify-content-center 'style={{alignItems:'center',justifyContent:'center',marginLeft:'65%'}} src="https://th.bing.com/th/id/OIP.jxDTezdusZC-8xV7MtjswwHaHa?w=198&h=199&c=7&r=0&o=5&pid=1.7 rounded "/>
        </Col>
      <Card.Body>
        <Card.Title className='fw-bold align-items-center justify-content-center'style={{color:'lightskyblue',justifyContent:'center',alignItems:'center',marginLeft:'20%'}}>Lowest price, guaranteed</Card.Title>
        <Card.Text  style={{color:'brown'}} >
        Do fun stuff without breaking the bank—we’ve got the best prices out there.
        </Card.Text>
        
      </Card.Body>
    </Card>



     </div>




     </div>

    </>
  )
}

export default Landing