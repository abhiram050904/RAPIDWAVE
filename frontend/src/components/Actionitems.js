import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import avatar from '../images/avatar2.png';
import { FaCarSide, FaMotorcycle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";

const Actionitems = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('chat-app-user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser); // Attempt to parse the stored JSON
        setUsername(user.username); // Check if the 'username' property exists
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const navigate = useNavigate();

  const handleInputButtonClick = () => {
    navigate('/search'); // Navigate to the search page
  };

  return (
    <ActionContainer>
      <Header>
        <Profile>
          <Name>Welcome, {username || 'User'}!</Name>
          <UserImage src={avatar} alt="User" />
        </Profile>
      </Header>
      <ActionButtons>
        <ActionButton onClick={() => navigate('/search')}>
          <StyledIcon as={FaCarSide} />
          Ride
        </ActionButton>
        <ActionButton onClick={() => navigate('/search')}>
          <StyledIcon as={FaMotorcycle} />
          Two Wheeler
        </ActionButton>
        <ActionButton onClick={() => navigate('/search')}>
          <StyledIcon as={SlCalender} />
          Reserve
        </ActionButton>
      </ActionButtons>
      <InputButton onClick={handleInputButtonClick}>
        Where do you want to go?
      </InputButton>
    </ActionContainer>
  );
};

// Styled Components
const ActionContainer = styled.div`
  flex: 1;
  padding: 16px;
  background: #bff2f1;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  color: black;
  font-size: 18px;
`;

const UserImage = styled.img`
  height: 50px;
  width: 50px;
  border: 1px solid grey;
  border-radius: 50%;
  margin-left: 10px;
`;

const Name = styled.div`
  margin-right: 16px;
  font-size: 30px;
  font-weight: 500;
  color: #333333;
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between; /* Ensure equal space between buttons */
  margin-top: 20px;
  padding: 0 20px; /* Padding to slightly reduce the button size */
`;

const ActionButton = styled.div`
  flex: 1;
  background-color: black;
  margin: 0 10px; /* Adjusted margin for slight spacing */
  padding: 10px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color:#4FFFB0;
    transform: scale(1.05);
  }
`;

const StyledIcon = styled.div`
  font-size: 50px;
  margin-bottom: 5px;
  color: white;

  ${ActionButton}:hover & {
    color: #007bff;
    font-size: 55px; /* Slightly increase size on hover */
  }
`;

const InputButton = styled.div`
  height: 60px;
  background-color: black;
  text-align: center;
  font-size: 24px;
  padding: 10px;
  margin-top: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: white; /* Default text color */
  transition: background-color 0.3s ease, color 0.3s ease; /* Added transition for text color */

  &:hover {
    background-color: #4FFFB0;
    color: darkblue; /* Change text color to dark blue on hover */
  }
`;

export default Actionitems;
