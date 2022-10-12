import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import Chart from '../components/Chart';
import TableContainer from '../components/TableContainer';
import RootLayout from './RootLayout';

const RoutesComponent = () => (
	<ReactRouterRoutes>
		<Route path='/' element={<RootLayout />}>
			<Route index element={<TableContainer />} />
			<Route path='chart' element={<Chart/>}/>
		</Route>
	</ReactRouterRoutes>
);

export default RoutesComponent;