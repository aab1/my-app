import 'bulma/css/bulma.css'
import ProfileCard from "./Profilecard";
import AlexaImage from './images/alexa.png';
import SiriImage from './images/siri.png';
import CortanaImage from './images/cortana.png';


function App() {
    return <div>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Personal Digital Assistants</p>
            </div>
        </section>

        <div className='container'>
            <section className='section'>
                <div className='columns'>
                    <div className='column is-4'>
                    <ProfileCard 
                        title="Alexa" 
                        handle="@alexa99" 
                        image={AlexaImage}
                        description="Alexa was created by Amazon and help you buy things."
                     />
                    </div>
                    <div className='column is-4'>                
                        <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImage}
                            description="Cortana was created by Microsoft and helps you talk to windows machines."
                        />
                    </div>
                    <div className='column is-4'>
                        <ProfileCard 
                            title="Siri"
                            handle="@siri01" 
                            image={SiriImage}
                            description="Siri was created by Apple and help you talk to iphone"
                        />                
                    </div>
                </div>
            </section>
        </div>

    </div>
}

export default App;

/*
CSS
The documentation can be found here:https://bulma.io/documentation/columns/basics/
Note the html are used as examples in the docs but react uses jsx therefore, class = className

Default export
you can only have one export default in a file
you can also import a default export with the name given to it e.g. import App from './App'
You can change the name of the default import to anything e.g. import myApp from./App


Named export
This allows us to export multiple variables
e.g. 1
const message = 'hi'
export {message}

e.g.2
export message = 'hi'

This can be imported  using the curly braces which tells us that it is named export as show below:
note that named export can not be renamed when importing it.
import {message} from './App'

You also import the default and the named as 
import App, {message} from './App'
*/