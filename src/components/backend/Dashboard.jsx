import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Sidebar from '../common/Sidebar'

const Dashboard = () => {
  return (
    <>
      <Header/>
      <main className=' my-5'>
        <div className="container">
          <div className="row">
            <aside className="col-md-3 sidebar">
              {/* Sidebar */}
             <Sidebar/>
              
            </aside>
            <section className="col-md-9 content dashboard">
              {/* Dashboard */}
              <div className="card shadow border-0">
                <div className="card-body p-3 d-flex justify-content-center align-items-center">
                  <h4 className="mb-3 ">Dashboard</h4>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default Dashboard
