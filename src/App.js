import React from "react";
import './App.sass';
import axios from "axios";
import {People} from "./components/People/People";
import Starships from "./components/Starships/Starships";
import Planets from "./components/Planets/Planets";
import ClipLoader from "react-spinners/ClipLoader";

export class App extends React.Component {
    constructor() {
        super();
    }

    state = {
        type : 'people',
        data : {},
        loading : true,
        error: false,
    }

    getPeople = async () => {
        try {
            const response = await axios.get(`https://swapi.dev/api/${this.state.type}/2/`);
            this.setState({data : response.data, loading: false})
        } catch (e) {
            this.setState({error: true})
        }
    }

    componentDidMount () {
        this.getPeople();
    }



    setType = async (type) => {
        await this.setState({type: type, loading: true})
        await this.getPeople();
    }

    render() {
        const {error,loading,type,data} =  this.state;

        return(
            <>
                <main>
                    <div className="tab">
                        <button
                            className={type === "people" ? "active" : '' }
                            onClick={() => this.setType('people')}
                            type="button">People
                        </button>
                        <button
                            className={type === "planets" ? "active" : '' }
                            onClick={() => this.setType('planets')}
                            type="button">
                            Planets
                        </button>
                        <button
                            className={type === "starships" ? "active" : '' }
                            onClick={() => this.setType('starships')}
                            type="button">Starships
                        </button>
                    </div>
                    {
                        error ? (
                            <div>Oops</div>
                        ) : (
                            <>
                                {
                                    loading ? (
                                        <ClipLoader/>
                                    ) : (
                                        <>
                                            {
                                                type === "people"  && <People data={data}/>
                                            }
                                            {
                                                type === "planets"  && <Planets data={data}/>
                                            }
                                            {
                                                type === "starships"  && <Starships data={data}/>
                                            }
                                        </>
                                    )
                                }
                            </>
                        )
                    }

                </main>
            </>
        )
    }
}

export default App