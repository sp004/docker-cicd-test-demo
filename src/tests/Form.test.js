// Generated by CodiumAI

describe('Form', () => {

});

    // Tests that submitting the form with valid inputs updates the 'values' state object with the correct values.
    it('should update the values state object when submitting the form with valid inputs', () => {
        const wrapper = mount(<Form />);
        const usernameInput = wrapper.find('input[name="username"]');
        const emailInput = wrapper.find('input[name="email"]');
        const passwordInput = wrapper.find('input[name="password"]');
        const confirmPasswordInput = wrapper.find('input[name="confirmPassword"]');
        const fullnameInput = wrapper.find('input[name="fullname"]');
        const mobileInput = wrapper.find('input[name="mobile"]');

        usernameInput.simulate('change', { target: { name: 'username', value: 'testuser' } });
        emailInput.simulate('change', { target: { name: 'email', value: 'testuser@test.com' } });
        passwordInput.simulate('change', { target: { name: 'password', value: 'Test123!' } });
        confirmPasswordInput.simulate('change', { target: { name: 'confirmPassword', value: 'Test123!' } });
        fullnameInput.simulate('change', { target: { name: 'fullname', value: 'Test User' } });
        mobileInput.simulate('change', { target: { name: 'mobile', value: '1234567890' } });

        wrapper.find('form').simulate('submit');
        expect(wrapper.find('pre').text()).toEqual('{"username":"testuser","email":"testuser@test.com","birthday":"","password":"Test123!","confirmPassword":"Test123!","fullname":"Test User","mobile":"1234567890"}');
    });

