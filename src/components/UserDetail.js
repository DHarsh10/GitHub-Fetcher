import {React, useEffect} from "react";
import {Link} from "react-router-dom";
import RepoList from "./RepoList";


const UserDetail = (props) => {

    useEffect( () => {
        props.getDetails(props.match.params.anything)
        props.getRepos(props.match.params.anything)
    }, [])


    return (
        <>
            <Link to='/' className="btn btn-dark">Back To Search</Link>
            Hireable: {props.user.hireable ? (<i className="fa fa-check text-success" />) : (<i className="fa fa-times-circle text-danger" />)}


            <div className="card card1 grid-2">
                <div className="all center">
                    <img src={props.user.avatar_url} className="round-img" alt="" style={{width: '150px'}} />

                    <h1>{props.user.name}</h1>

                    {props.user.location && <p>Location: {props.user.location}</p>}
                </div>


                <div>
                    {props.user.bio && 
                    <>
                    <h3>Bio</h3>
                    <p>{props.user.bio}</p>
                    </>}

                    <a href={props.user.html_url} className="btn btn-dark my-1">Visit GitHub Profile</a>


                    <ul>

                    <li>
                        {props.user.company && (
                            <>
                            <strong>Company: {props.user.company}</strong>
                            </>
                        )}
                    </li>

                    <li>
                        {props.user.blog && (
                            <> 
                            <strong>Website: {props.user.blog}</strong>
                            </>
                        )}
                    </li>

                    <li>
                        {props.user.login && (
                            <>
                            <strong>Username: {props.user.login}</strong>
                            </>
                        )}
                    </li>
                </ul>
                </div>
             </div>

            

            <div className="card text-center">
                <div className="badge badge-primary">Followers: {props.user.followers}</div>
                <div className="badge badge-success">Following: {props.user.following}</div>
                <div className="badge badge-danger">Public Repos: {props.user.public_repos}</div>
                <div className="badge badge-dark">FPublic Gists: {props.user.public_gists}</div>
            </div>


            <RepoList repos={props.repos}/>

        </>
    )
}


export default UserDetail;