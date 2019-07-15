import React from 'react';
import { Bullseye } from '@patternfly/react-core';
import { useAuth0 } from '../react-auth0-wrapper';

const Home = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Bullseye>
      <div className="padding-top">
        <div className="card text-center">
          <div className="card-body">
            <h1 className="h1">Welcome to GitGhost - Dev mode on</h1>
            <img src={require('./image.png')} alt="" />
            <p className="card-text">
              Search GitHub Users and repositories to get insite into your
              projects!
            </p>
            <div>
              {!isAuthenticated && (
                <button className="btn btn-primary"
                  onClick={() => loginWithRedirect({})
                  }
                >
                  log in
            </button>
              )}
              {isAuthenticated && <a href="#/search" className="btn btn-primary">
                Start Ghosting!
              </a>}
            </div>
          </div>
        </div>
      </div>
    </Bullseye>
  );
};

export default Home;
