import './homepage.css'
import myImage from "../asserts/images/img1.jpeg"

const Home = ()=> {
return (
    <div class="container">
        <div class = "image">
        <img src={myImage} alt="Description of my image" style={{ width: '300px', height: 'auto' }} />
        </div>
        <div class="greetings">
        <p class="one">
            Hello, I'm <span class="line-through">Ninshuti Poli Ndiramiye</span>.<br />
            But simply, just call me <span class="underline">Mr Ndi</span>.</p>
            <p class ="two">A software Engineer</p>
        </div>
    </div>
)
};
export default Home;