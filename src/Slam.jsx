import './Slam.css'
function Slam(){
    return(
        <div>
           
            <div>
    
                <form class="form">
                    <h1>SLAM BOOK</h1>
                    <label>Name:</label>
                    <input class="nm" type="text" placeholder="Enter your name"></input>
                    <label for ="phone">Number:</label>
                    <input class="name" type="text" placeholder="Enter your number"></input>
                    <label for="address">Address:</label>
                    <textarea class="add" placeholder="Enter your address"></textarea>
                    <label>Friend In:
                    <label><input class="frnd" type="radio" name="friend"></input>School</label>
                    
                    <label><input class="frnd" type="radio" name="friend"></input>College</label></label>
                    <label>DOB:
                    <input class ="date" type="date"></input></label>
                    <label>Favourite Actors:</label>
                    <label><input class="act" type="checkbox"></input>Ajith</label>
                    <label><input class="act" type="checkbox"></input>Surya</label>
                    <label><input class="act" type="checkbox"></input>Karthi</label>
                    <label><input class="act" type="checkbox"></input>DQ</label>
                    <label><input class="actor" type="checkbox"></input>Ram Charan</label>
                    <label for="memories">Share our best memories:</label>
                    <textarea class="add" placeholder="Share our memories"></textarea>
                    <input type="submit" class="submit"></input>
                </form>
            </div>

        </div>
    )
}
export default Slam