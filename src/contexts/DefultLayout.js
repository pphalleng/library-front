import { Navigate, Outlet, Link , useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import AdminNavbar from "../components/Navbars/AdminNavbar";
// import { useEffect,useState } from "react";
// import axiosClient from "../axios-client";
// import IconUser from "../assets/icons/IconUser";
// import Logo from '../assets/images/logo.jpg';
// import IconBrandStackshare from "../assets/icons/IconBrandStackshare";
// import IconGraph from "../assets/icons/IconGraph";
// import IconPower from "../assets/icons/IconPower";
// import IconAppsFilled from "../assets/icons/IconAppsFilled";

const styles = {
  content: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    margin: "5px 0",
  },
  sideBar: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
    padding: "20px",
    paddingBottom: "30vh",
    backgroundImage: "linear-gradient(to bottom, #ffffff 0%, #f0f0f0 100%)"
  },
  logoImage: {
    width: '20%',
    height: '20%'
  },

  routerLocation: {
    backgroundColor: "#1e1e1e",
  },

};
const DefaultLayout = () => {
  const { user, token, setUser, setToken, notification } = useStateContext();
  // if (!token) {
  //   return <Navigate to="/login" />;
  // }
  // const onLogout = (ev) => {
  //   ev.preventDefault();
  //   axiosClient.post("/logout").then(() => {
  //     setUser({});
  //     setToken(null);
  //   });

  //   localStorage.removeItem('ACCESS_TOKEN');
  //   return window.location.reload();
  // };

  // const [permissions, setPermissions] = useState([]);

  // const getMe = () => {
  //   axiosClient.get("/users/me").then(({ data }) => {
  //       setUser(data);
  //       setPermissions(data.roleId);
  //       console.log(data.roleId);
  //     }
  //   );
  // };

  // useEffect(() => {
  //   getMe();
  //   axiosClient.get("/users").then(({ data }) => {
  //     setUser(data);
  //   });
  // }, []);
  return (
    <div id="defaultLayout">
      {/* <AdminNavbar/> */}

      


      {/* <aside style={styles.sideBar}>
        <Link to="/roles" 
              style={{...styles.content,
              backgroundColor: currentPath === "/roles" ? "rgba(0, 0, 0, 0.2)" : "transparent",
            }}
          >
            
            &nbsp; Roles
          </Link>
        <Link to="/users" 
          style={{...styles.content,
            backgroundColor: currentPath === "/users" ? "rgba(0, 0, 0, 0.2)" : "transparent",
          }}
        >
          
          &nbsp; Users
        </Link>
        
        <Link to="/client-logs" 
            style={{...styles.content,
            backgroundColor: currentPath === "/client-logs" ? "rgba(0, 0, 0, 0.2)" : "transparent",
          }}
        >
          
          &nbsp; Client logs
        </Link>
        <Link to="/app-functions" 
            style={{...styles.content,
            backgroundColor: currentPath === "/app-functions" ? "rgba(0, 0, 0, 0.2)" : "transparent",
          }}
        >
          
          &nbsp; App Functions
        </Link>
        <Link to="/function-statuses" 
            style={{...styles.content,
            backgroundColor: currentPath === "/function-statuses" ? "rgba(0, 0, 0, 0.2)" : "transparent",
          }}
        >
          
          &nbsp; Function Statuses
        </Link>
      </aside>

        <main>
          <Outlet />
        </main> */}
    </div>
  );
};

export default DefaultLayout;