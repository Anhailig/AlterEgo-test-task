import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import { initialLimit } from './consts';
import WithAuth from './hoc/RequireAuth';
import { useAppDispatch } from './hooks/redux';
import { Home } from './pages/Home/Index';
import { Login } from './pages/Login/Index';
import { News } from './pages/News/Index';
import { Profile } from './pages/Profile/Index';
import { fetchNews } from './store/actionCreators';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews(initialLimit));
  }, [dispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='login' element={<Login />}/>
          <Route path='news' element={<News />}/>
          <Route path='profile' element={
            <WithAuth>
              <Profile />
            </WithAuth>
          }/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
