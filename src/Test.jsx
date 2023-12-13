import React, { useState, useEffect } from 'react';

function UserProfileForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    // Другие поля пользователя
  });

  useEffect(() => {
    // Загрузка данных пользователя при монтировании компонента
    fetchUserData(); // Реализуйте эту функцию для загрузки данных пользователя
  }, []);

  const fetchUserData = async () => {
    // Логика для загрузки данных пользователя с сервера
    try {
      const response = await fetch('http://localhost:3000/userData'); // Реализуйте эндпоинт для загрузки данных пользователя
      const userDataFromServer = await response.json();
      setUserData(userDataFromServer);
    } catch (error) {
      console.error('Ошибка при загрузке данных пользователя', error);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users/123', { // Замените на фактический ID пользователя
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const updatedUserData = await response.json();
      console.log('Данные пользователя успешно обновлены:', updatedUserData);
    } catch (error) {
      console.error('Ошибка при обновлении данных пользователя', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="name">Имя:</label>
      <input type="text" id="name" name="name" value={userData.name} onChange={handleInputChange} />
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" name="email" value={userData.email} onChange={handleInputChange} />
      <button type="submit">Сохранить</button>
    </form>
  );
}

export default UserProfileForm;
