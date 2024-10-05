document.getElementById('generateOtpBtn').addEventListener('click', generateOtp);
document.getElementById('getUserProfileBtn').addEventListener('click', getUserProfile);

async function generateOtp() {
    const mobile = document.getElementById('mobile').value;
    const url = 'https://hpridsbx.abdm.gov.in/api/otp/generate'; // Replace with actual OTP generation URL

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ mobile })
        });

        const data = await response.json();
        document.getElementById('otpResponse').innerText = data.message || 'OTP sent successfully!';
    } catch (error) {
        console.error('Error generating OTP:', error);
        document.getElementById('otpResponse').innerText = 'Error generating OTP.';
    }
}

async function getUserProfile() {
    const userId = document.getElementById('userId').value;
    const url = `https://hpridsbx.abdm.gov.in/api/user/${userId}`; // Replace with actual user profile URL

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        document.getElementById('userProfileResponse').innerText = JSON.stringify(data, null, 2);
    } catch (error) {
        console.error('Error fetching user profile:', error);
        document.getElementById('userProfileResponse').innerText = 'Error fetching user profile.';
    }
}
