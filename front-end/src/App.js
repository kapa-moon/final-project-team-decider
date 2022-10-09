import './App.css';

function App()
{
  return(
    <div className = "App">
      <header className = "App-header">
        <form>
        <button type = "button">Create New Team</button><br></br><br></br>
        <input type = "text" id = "team_name" name = "team_name" placeholder = "Enter Team Code"></input><br></br><br></br>
        <input type = "submit" value = "Submit" ></input><br></br><br></br>
        <button type = "button">Be a Long-Term User</button><br></br><br></br>
        <button type = "button">Long-Term User Log In</button>
        </form>
      </header>
    </div>
  );
}

export default App;