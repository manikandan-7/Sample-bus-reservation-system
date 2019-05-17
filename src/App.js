import React from "react"
import { Button, Dropdown, Container ,Icon} from 'semantic-ui-react'
//import { withAlert } from 'react-alert'
//import AlertTemplate from 'react-alert-template-basic'
//import { Alert } from 'react-alert'
class App extends React.Component {
   constructor() {
      super();
      this.state = {
      bookings:[],
      booking:{
         origin: '',
         destination: '',
         time: '',
         selectedSeatNo: [],
         flag: false,
         travelsName : '',
      },
      filterSeats : [],
         travels : [
            {
               text: 'a1travels',
               value: 'a1travels',
            },
            {
               text: 'a2travels',
               value: 'a2travels',
            },
            {
               text: 'a3travels',
               value: 'a3travels',
            }
         ],
   
   seats :{
      a1travels : [
     {
        text: 'a1',
        value: 'a1',
     },
     {
        text: 'a2',
        value: 'a2',
     },
     {
        text: 'a3',
        value: 'a3',
     }
  ],
  a2travels : [
  {
     text: 'a1',
     value: 'a1',
  },
  {
     text: 'a2',
     value: 'a2',
  },
  {
     text: 'a3',
     value: 'a3',
  }
],
a3travels : [
  {
     text: 'a1',
     value: 'a1',
  },
  {
     text: 'a2',
     value: 'a2',
  },
  {
     text: 'a3',
     value: 'a3',
  }
]
},
      places : [
         {
            text: 'coimbatore',
            value: 'coimbatore',
         },
         {
            text: 'chennai',
            value: 'chennai',
         },
         {
            text: 'bangalore',
            value: 'bangalore',
         }
      ]
       
   }   
      // this.handleChange = this.handleChange.bind(this);
   }
   /*componentWillMount(){
      
      
      //console.log(book.no)

      arr.push(booking.no)
      let {seats,arr}=this.state
      if(booking!=null)
      {
      console.log(booking[0].no)
      this.setState({arr})
      console.log(arr)
      for(var i=0;i<arr.length;i++)
      {
         for(var j=0;j<seats.length;j++)
         {
         if(seats[j].value===arr[i])
         {
            seats.splice(j,1)
            //console.log(seats)
            this.setState({seats})
         }
      }
      }
      this.myFunction1()
   }
       }*/
   handleChange = (e, { name, value }) => {
      let {booking} = this.state;
      booking[name] = value
      this.setState({booking})
   }
   chooseTravels=(e,{name, value})=>{
      let {booking,seats,filterSeats,travelsName} = this.state;
      let {origin,destination}=this.state.booking;
      booking[name] = value
      this.setState({booking})
      let bookings =JSON.parse(localStorage.getItem("bookings"));
      console.log(bookings)
      console.log(value)
      if(bookings!=null)
      {
      let seatNo = bookings.map((booking,index)=>{
         console.log(value===booking.travelsName)
         if(value===booking.travelsName&&origin===booking.origin&&destination===booking.destination)
         {
            console.log(booking.selectedSeatNo)

            return booking.selectedSeatNo
         }
         else{
            return seats[travelsName]
         }
      })
      let m=0,y=0
      for(let i=0;i<seats[value].length;i++)
      {
         for(let j=0;j<seatNo.length;j++)
         {
            if(seats[value][i].value==seatNo[j])
            {
               m++;
            }
         }
         if(m==0)
         {
            filterSeats[y]=seats[value][i]
            y++
         }
         m=0
      }
      //console.log("seatno",seatNo);
      //let y=3;
      //console.log(seatNo.length,y)
      /*let m=0;
      for(let i=0;i<seatNo.length;i++)
      {
       
         for(let j=0;j<seats[value].length;j++)
         {
          
             if(seatNo[i]!=seats[value][j].value)
             {
                console.log(seats[value][j])
                let n = filterSeats.includes(seats[value][j])
                if(n!=1)
                {
                filterSeats[m]=seats[value][j]
                
                m++;
                }
             }
         }
      }*/
      /*const dis = (val,index,self)=>{
         return self.indexOf(val)===index;
      }
      filterSeats=seats[value].filter(dis)*/
      this.setState({filterSeats})
     // m=0
      console.log(filterSeats)
      
   }
   else{
      console.log(seats[value])
      filterSeats=[...seats[value]]
      console.log(filterSeats)
      this.setState({filterSeats})
   }
   }
   
   myFunction = () => {
      let { origin, destination ,travelsName} = this.state.booking;
      console.log(origin, destination)
      origin = origin.toLowerCase();
      destination = destination.toLowerCase();
      let time;
      if (origin === "chennai" && destination === "bangalore") {
         if(travelsName==="a1travels")
         time = "9:30"
         if(travelsName==="a2travels")
         time = "10:30"
         if(travelsName==="a3travels")
         time = "11:30"
         
      }
      else if (origin === "chennai" && destination === "coimbatore") {
         if(travelsName==="a1travels")
         time = "12:30"
         if(travelsName==="a2travels")
         time = "1:30"
         if(travelsName==="a3travels")
         time = "2:30"
         
      }
      else if (origin === "coimbatore" && destination === "chennai") {
         if(travelsName==="a1travels")
         time = "3:30"
         if(travelsName==="a2travels")
         time = "4:30"
         if(travelsName==="a3travels")
         time = "5:30"
         
      }
      else if (origin === "coimbatore" && destination === "bangalore") {
         if(travelsName==="a1travels")
         time = "6:30"
         if(travelsName==="a2travels")
         time = "7:30"
         if(travelsName==="a3travels")
         time = "8:30"
         
      }
      else if (origin === "bangalore" && destination === "chennai") {
         if(travelsName==="a1travels")
         time = "9:30"
         if(travelsName==="a2travels")
         time = "10:30"
         if(travelsName==="a3travels")
         time = "11:30"
         
      }
      else if (origin === "bangalore" && destination === "coimbatore") {
         if(travelsName==="a1travels")
         time = "9:30"
         if(travelsName==="a2travels")
         time = "10:30"
         if(travelsName==="a3travels")
         time = "11:30"
         
      }
      else {
         time = "no buses available"
      }

      let booking = this.state.booking;
      booking.time = time;
      this.setState({ booking })
   }
   check= ()=>{
      if(this.state.booking.origin===this.state.booking.destination)
      {
         alert("origin and destination cannot be same!!!")
      }
   }
   del=()=>{
      delete this.state.booking.seats[this.state.booking.travelsName]
   }
    myFunction1= ()=>{
  //let k=JSON.parse(localStorage.getItem("booking"));
//console.log(k.no)
//bookings.push(booking)
//localStorage.setItem("bookings", JSON.stringify(this.state.bookings));
console.log(this.state.booking)
let {filterSeats}= this.state
      filterSeats = [];
      this.setState({filterSeats})
      console.log(filterSeats)
  
let {bookings,booking}=this.state
      if(booking.origin!==''&&booking.destination!=='')
      {
      
      bookings.push(booking)
      localStorage.setItem("bookings", JSON.stringify(bookings));
      let booking1 = {
         origin: '',
         destination: '',
         time: '',
         selectedSeatNo: [],
         flag: false,
         travelsName : '',
      }
      this.setState({bookings,booking:booking1})
      console.log(bookings)
   }

      /*arr1.push(booking.book.no)
      //arr2=arr1.concat(booking.book.no)
      //this.setState({arr1})
      //this.setState({arr2})
      
      for(var i=0;i<arr2.length;i++)
      {
         for(var j=0;j<seats.length;j++)
         {
         if(seats[j].value===arr2[i])
         {
            seats.splice(j,1)
            //console.log(seats)
            this.setState({seats})
         }
      }
      }*/
      
    }
   render() {
      
      
      
      return (
         <Container>
            <div>
               <label>Enter Origin</label>
               <Dropdown
                  placeholder=' '
                  value={this.state.booking.origin}
                  name="origin"
                  onChange={this.handleChange}
                  fluid
                  selection
                  options={this.state.places}
                   />
               <br />
               <label>Enter Destination</label>
               <Dropdown
                  placeholder=' '
                  fluid
                     selection
                  options={this.state.places}
                  value={this.state.booking.destination}
                  name="destination"
                  onChange={this.handleChange} />
                   <Button basic color='green' onClick={this.check} >
                  check
    </Button>

               <br />
               </div>
               <div>
               
                  <div>
               <label>select your travelsName</label>
               <Dropdown
                  placeholder=' '
                  fluid
                     selection
                  options={this.state.travels}
                  value={this.state.booking.travelsName}
                  name="travelsName"
                  onChange={this.chooseTravels} />
                  <br/>

               <Button basic color='green' onClick={this.myFunction} >
                  available timing
    </Button>

               <Icon name="time"></Icon>{this.state.booking.time}
               <br/>

               <Button basic color='violet' onClick={() => {
                  let booking=this.state.booking
                  booking.flag=true
                   this.setState({ booking }) }}>
                  book tickets
</Button>
               <div>
                  {this.state.booking.flag ? (
                     <React.Fragment>
                      <label>Select your seats</label>
               <Dropdown
                  placeholder=' '
                  value={this.state.booking.selectedSeatNo}
                  name="selectedSeatNo"
                  onChange={this.handleChange}
                  //onSelect={this.del}
                  fluid
                  selection
                  options={this.state.filterSeats}
                   multiple/>
                 
                     </React.Fragment>
                  ) : null}
               

               </div>
               
               <div>
                  {this.state.booking.flag?(
               <Button basic color='green' onClick={this.myFunction1} >
                  book
    </Button>) : null}
                  
    </div>
            </div>
               </div>
         </Container>
      )
      //var retrievedData = localStorage.getItem("data4");
      //var movies2 = JSON.parse(retrievedData);
   }
}
export default App

