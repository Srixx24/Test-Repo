body {
    margin: 0;
    overflow: hidden;
  }
.welcome-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(128, 128, 128, 0.8); /* Initial grey color */
    color: color(xyz-d50 0.33 0.56 0.23);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3.5em;
    font-family: "Parkinsans", sans-serif;
    font-weight: 700;
    opacity: 1;
    transition: opacity 1s ease;
    overflow: hidden;
    animation: breathe 8s ease-in-out infinite; /* Breathing effect */
    z-index: 2;
}

#AR-camera{
    display: none;
}
.ar-label {
    color: #B24968;
    background: #6C5FA7;
    opacity: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: baseline;
    font-size: 2em;
    font-family: "Parkinsans", sans-serif;
    font-weight: 150;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Parkinsans", sans-serif;
    color: color(xyz-d50 0.09 0.11 0.22);
    font-weight: 700;
}
.logo {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    margin-top: 52%;
}
#welcome-screen, #logo {
    transition: opacity 1s ease;
}
a-scene {
    display: none;
}

