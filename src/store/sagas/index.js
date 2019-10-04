import { all, takeLatest } from 'redux-saga/effects';
import { TeamsTypes } from '../ducks/teams';
import { ProjectsTypes } from '../ducks/projects';
import { AuthTypes } from '../ducks/auth';
import { signIn, signOut } from './auth';
import { getTeams, createTeam } from './teams';
import { getProjects, createProject } from './projects';

export default function* rootSaga() {
  return yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_OUT, signOut),
    takeLatest(TeamsTypes.GET_TEAMS_REQUEST, getTeams),
    takeLatest(TeamsTypes.CREATE_TEAM_REQUEST, createTeam),
    takeLatest(ProjectsTypes.GET_PROJECTS_REQUEST, getProjects),
    takeLatest(ProjectsTypes.CREATE_PROJECT_REQUEST, createProject),
  ]);
}
