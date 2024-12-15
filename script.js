function showRegisterForm() {
  const loginTab = document.querySelector('.tabs button:nth-child(1)');
  const registerTab = document.querySelector('.tabs button:nth-child(2)');
  loginTab.classList.remove('active');
  registerTab.classList.add('active', 'register');

  const form = document.querySelector('form');
  form.innerHTML = `
      <div class="form-group">
          <label for="name">Full Name</label>
          <input type="text" id="name" placeholder="Enter your full name">
      </div>
      <div class="form-group">
        <label for="role">Select Role</label>
        <select id="role">
          <option value="select">----</option>
          <option value="customer">Customer</option>
          <option value="admin">Trainer</option>
        </select>
      </div>
      <div class="form-group">
          <label for="mobile">Mobile No.</label>
          <input type="text" id="mobile" placeholder="Enter your mobile number.">
      </div>
      <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email">
      </div>
      <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="********">
      </div>
      <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="********">
      </div>
      <button type="submit" class="submit">Register</button>
  `;
}