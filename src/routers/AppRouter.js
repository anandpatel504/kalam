import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import DashboardPage from '../components/Dashboard';
import PartnerList from '../components/PartnerList';
import AddPartner from '../components/AddPartner';
import AdmissionsDash from '../components/AdmissionsDash';
import AssessmentAttempts from '../components/AssessmentAttempts';
import ViewAssessments from '../components/ViewAssessments';
import MyTaskReport from '../components/MyTask';
import StageWiseDanglingReport from '../components/StageWiseDanglingReport';
import MyAssignReport from '../components/MyAssign';
import NotFoundPage from '../components/NotFoundPage';
import LoginDesign from '../components/LoginDesign';
import UserMoblieNumber from '../components/UserMoblieNumber';
import UpdateMobileNumber from '../components/UpdateMobileNumber';
import ReportContainer from '../components/ReportContainer';
import ProgressMadeForPartner from '../components/progressMade';
// if authenticated, redirect to /students else be there
import PublicRoute from './PublicRouter';
// if authenticated be there, else redirect to /login
import PrivateRoute from './PrivateRouter';
// default behavior
import AnyRoute from './AnyRouter';

import history from '../utils/history';

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>        
        <PublicRoute path="/" component={LandingPage} exact={true} />
        <PrivateRoute path="/update/mobile/number" component={UpdateMobileNumber} exact={true} />
        <PublicRoute path="/login" component={LoginDesign} exact={true} />
        <PrivateRoute path="/tasks" component={MyTaskReport} />
        <PrivateRoute path="/report/dangling" component={StageWiseDanglingReport} />
        <PrivateRoute path="/report/all" component={ReportContainer} />
        <PrivateRoute path="/assign/user" component={MyAssignReport} />
        <PrivateRoute path="/students" component={AdmissionsDash} />
        <PrivateRoute path="/students/:dataType" component={AdmissionsDash} />
        
        <PublicRoute path="/user/mobile/number" component={UserMoblieNumber} />
        <PrivateRoute path="/partner/add" component={AddPartner} />
        <AnyRoute path="/partner/:partnerId/assessments" component={ViewAssessments} />
        <AnyRoute path="/partner/:partnerId" component={ProgressMadeForPartner} />
        <AnyRoute path="/partnerLanding/:slug" component = {LandingPage} />
        <PrivateRoute path="/partners" component={PartnerList} />
        <AnyRoute path="/partners/:partnerId/assessments/:assessmentId" component={AssessmentAttempts} />
        
        <Route component={NotFoundPage} />
      </Switch>
      
    </div>
  </Router>
);

export default AppRouter;