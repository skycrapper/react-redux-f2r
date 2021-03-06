import * as types from '../constants/ActionTypes';
import * as api from './api';
import _ from 'lodash';

export function editModeUpdate(panelName, value) {
 return {
   type: types.PROPERTY_EDIT_MODE,
   panelName,
   value
 };
}

export const loadPropertiesList = () => {
  return (dispatch, getState) => {
    let requestPropertiesList = api.getLLPropertiesList(dispatch, getState);

    api.setStatus(dispatch, 'loading', 'propertiesList', true);

    Promise.all([
      requestPropertiesList
    ])
    .then((results) => {
      const properties = results[0];

      dispatch({ type: types.PROPERTIES_LIST_LOAD, payload: properties });

      api.setStatus(dispatch, 'loading', 'propertiesList', false);
    });
  };
};

export const initPropertyProfile = () => ({
  type: types.PROPERTY_PROFILE_INIT
});

export const setPropertyLocalPic = (payload) => ({
  type: types.PROPERTY_LOCAL_PIC_SET,
  payload
});

export const loadPropertyProfile = (propertyId) => {
  return (dispatch, getState) => {
    let requestPropertyProfile = api.getLLPropertyProfile(propertyId, dispatch, getState);

    api.setStatus(dispatch, 'loading', 'propertyProfile', true);

    Promise.all([
      requestPropertyProfile
    ])
    .then((results) => {
      const property = results[0][0];

      property && dispatch({ type: types.PROPERTY_PROFILE_LOAD, payload: property });

      api.setStatus(dispatch, 'loading', 'propertyProfile', false);
    });
  };
};

export const loadPropertyLeases = (propertyId) => {
    return (dispatch, getState) => {
    let requestPropertyLeases = api.getLLPropertyLeases(propertyId, dispatch, getState);

    api.setStatus(dispatch, 'loading', 'propertyLeases', true);

    Promise.all([
      requestPropertyLeases
    ])
    .then((results) => {
      const propertyLeases = results[0];

      dispatch({ type: types.PROPERTY_LEASES_LOAD, payload: propertyLeases });

      api.setStatus(dispatch, 'loading', 'propertyLeases', false);
    });
  };
};

export const loadPropertyTenants = (propertyId) => {
    return (dispatch, getState) => {
    let requestPropertyTenants = api.getLLPropertyTenants(propertyId, dispatch, getState);

    api.setStatus(dispatch, 'loading', 'propertyTenants', true);

    Promise.all([
      requestPropertyTenants
    ])
    .then((results) => {
      const propertyTenants = results[0];

      dispatch({ type: types.PROPERTY_TENANTS_LOAD, payload: propertyTenants });

      api.setStatus(dispatch, 'loading', 'propertyTenants', false);
    });
  };
};

export const uploadPropertyPic = (propertyId, file, callback) => {
  return function (dispatch, getState) {
    api.setStatus(dispatch, 'uploading', 'propertyPicUpload', true);
    api.uploadPropertyPic(propertyId, dispatch, getState, file, (response) => {
      api.setStatus(dispatch, 'uploading', 'propertyPicUpload', false);
      if (callback) callback();
    });

  };
};

export const savePropertyDetails = (payload, callback) => {
  return function (dispatch, getState) {
    api.setStatus(dispatch, 'saving', 'propertyProfile', true);
    api.updateLLPropertyProfile(dispatch, getState, _.omit(payload, ['file']), (response) => {
      if (payload.file) {
        dispatch(uploadPropertyPic(response.id, payload.file, () => {
          api.setStatus(dispatch, 'saving', 'propertyProfile', false);
          dispatch(loadPropertyProfile(response.id));
          if (callback) callback(response);
        }));
      } else {
        api.setStatus(dispatch, 'saving', 'propertyProfile', false);
        dispatch({ type: types.PROPERTY_PROFILE_LOAD, payload: response });
        if (callback) callback(response);
      }
    });
  };
};

export const addPropertyDetails = (payload, callback) => {
  return function (dispatch, getState) {
    api.setStatus(dispatch, 'saving', 'propertyProfile', true);
    api.addLLPropertyProfile(dispatch, getState, payload, (response) => {
      if (payload.file) {
        dispatch(uploadPropertyPic(response.id, payload.file, () => {
          api.setStatus(dispatch, 'saving', 'propertyProfile', false);
          dispatch(loadPropertyProfile(response.id));
          if (callback) callback(response);
        }));
      } else {
        api.setStatus(dispatch, 'saving', 'propertyProfile', false);
        dispatch({ type: types.PROPERTY_PROFILE_LOAD, payload: response });
        if (callback) callback(response);
      }
    });
  };
};
