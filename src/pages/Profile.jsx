import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/UserProvider"

export const Profile = () => {
  
  const {logout, getProfile} = useContext(UserContext)
  const [email, setEmail] = useState(null)


  useEffect(() => {
    const getProfileAsync = async () => {
      const response = await getProfile();
      setEmail(response.email)
    }
    getProfileAsync()
  }, [])
  

  return (
    <>
    <section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">

        <div className="card" style={{borderRadius: '15px'}}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                className="rounded-circle img-fluid" style={{width: '100px'}}/>
            </div>
            <h4 className="mb-2">Julie L. Arsenault</h4>
            <p className="text-muted mb-4">email: <span className="mx-2"></span> <a
                href="#!">{email ? email : ''}</a></p>

            <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-rounded btn-lg" onClick={() => {logout()}}>
              Cerrar Sesión
            </button>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  )
}