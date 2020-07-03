import { UnsplashRootPath } from '../../utils/http/serverPath';
import * as actionTypes from './actionTypes';
import http from '../../utils/http/httpService';
import keys from '../../keys.secret';

export const getUsers = ({ searchQuery }) => (dispatch) => {
  if (!searchQuery) return;

  http
    .get(
      { requestId: 'getUsers' },
      `${UnsplashRootPath}/search/users?client_id=${keys.unsplashAccessKey}&query=${searchQuery}&page=1&per_page=10`,
    )
    .then((result) => {
      const users = result?.results.map((user) => ({
        name: user?.name,
        username: user?.username,
        userImage: user?.profile_image?.medium,
      }));

      dispatch({
        type: actionTypes.GET_USERS,
        payload: users,
      });
    });
};

export const getUserPhotos = ({ username }) => (dispatch) => {
  if (!username) return;

  http
    .get(
      { requestId: 'getUserPhotos' },
      `${UnsplashRootPath}/users/${username}/photos?client_id=${keys.unsplashAccessKey}&page=1&per_page=10`,
    )
    .then((result) => {
      const photos = result?.map((photo) => ({
        url: photo?.urls?.small,
      }));

      dispatch({
        type: actionTypes.GET_USER_PHOTOS,
        payload: photos,
      });
    });
};
