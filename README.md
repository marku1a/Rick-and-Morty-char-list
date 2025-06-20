# Rick and Morty Character List

A responsive React application that fetches and displays characters from the [Rick and Morty API](https://rickandmortyapi.com/). Users can search for characters by name and filter them by status (any, alive, dead, unknown). 

## 🔗 Live Demo

[View on GitHub Pages](https://marku1a.github.io/Rick-and-Morty-char-list)

## ✨ Features

- 🔎 **Search** characters by name
- 🏷️ **Filter** characters by status
- ♾️ **Infinite scroll** for smooth loading of additional characters
- 📱 **Responsive** design 
- ⚛️ Built with **React** and **Material UI**

## 📂 Project Structure

```plaintext
src/
├── components/
│   ├── cards/CharCard.tsx              # Card component for displaying character info
│   ├── header/Header.tsx               # Header with background image, search and filter inputs
│   └── api/fetchCharacter.tsx          # API call to fetch characters
│
├── types/
│   └── Characters.ts                   # Interface for Character
│
├── App.tsx                             # Main component, handles state, API logic, infinite scroll
```

## 📸 Screenshots
![1](https://github.com/user-attachments/assets/75f16f2c-b51f-4c28-a18b-8f3ee4ffed20)
![2](https://github.com/user-attachments/assets/b3b431c4-f532-4861-b8bf-d2a39bacddac)
![3](https://github.com/user-attachments/assets/4239b84c-c6cb-4e3f-b2bd-fb39da2631ca)
![4](https://github.com/user-attachments/assets/8742b313-1415-416a-ba0c-16e1109a945d)





## 🛠️ Technologies Used

- **React** (CRA - Create React App)
- **TypeScript**
- **Material UI (MUI)**
- **Rick and Morty API**
- **gh-pages** for deployment


### Clone the repository

```bash
git clone https://github.com/marku1a/Rick-and-Morty-char-list.git
cd Rick-and-Morty-char-list
