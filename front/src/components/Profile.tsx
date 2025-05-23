import React from "react"
import { getCurrentUser } from "../services/auth.service"

const Profile: React.FC = () => {
  const currentUser = getCurrentUser() || {
    username: "test",
    id: "test_id",
    accessToken: "test_token",
    email: "test_email",
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role: string, index: number) => (
            <li key={index}>{role}</li>
          ))}
      </ul>
    </div>
  )
}

export default Profile
