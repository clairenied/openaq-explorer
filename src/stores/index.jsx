import { createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';
//import createAuth from "./createAuth";
import createLocation from './createLocation';
import { Router, hashIntegration } from '@solidjs/router';
import createClient from './createClient';
import createOverlay from './createOverlay';
import createViewport from './createViewport';
import createHelp from './createHelp';
import createParameter from './createParameter';
import createParameters from './createParameters';
import createProviders from './createProviders';
import createMeasurements from './createMeasurements';

const StoreContext = createContext();

export function Provider(props) {
  let location;
  let overlay;
  let viewport;
  let measurements;
  let parameter;
  let parameters;
  let providers;
  let help;
  const [state, setState] = createStore({
    get location() {
      return location();
    },
    get overlay() {
      return overlay;
    },
    get measurements() {
      return measurements;
    },
    get parameter() {
      return parameter;
    },

    get parameters() {
      return parameters;
    },
    get providers() {
      return providers;
    },

    viewport: {
      zoom: 2,
      center: [0, 20],
    },
    providerListActive: false,
    get help() {
      return help;
    },

    //get currentUser() {
    //  return currentUser();
    //}
  });
  const actions = {};
  const store = [state, actions];
  const client = createClient(store);
  overlay = createOverlay(client, actions, state, setState);
  location = createLocation(client, actions, state, setState);
  viewport = createViewport(client, actions, state, setState);
  parameter = createParameter(client, actions, state, setState);
  help = createHelp(client, actions, state, setState);
  parameters = createParameters(client, actions, state, setState);
  providers = createProviders(client, actions, state, setState);
  measurements = createMeasurements(client, actions, state, setState);
  //currentUser = createAuth(agent, actions, setState);

  return (
    <Router source={hashIntegration()}>
      <StoreContext.Provider value={store}>
        {props.children}
      </StoreContext.Provider>
    </Router>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
