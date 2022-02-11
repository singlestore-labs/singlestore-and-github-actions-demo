# SingleStore and GitHub Actions Demo - Databases and DevOps

 This guide shows you workflow examples that configure SingleStore using GitHub Actions. The workflow runs a script that connects to the SingleStore service, creates a table, and then populates it with data. To test that the workflow creates and populates the SingleStore table, the script prints the data from the table to the console. 

## 1. Prepare your environment

Before we can start writing code, we need to make sure that your environment is
setup and ready to go.

1. Make sure you clone this git repository to your machine

   ```bash
   git clone https://github.com/JoeKarlsson/singlestore-and-github-actions-demo.git
   ```

2. A code editor that you are comfortable using, if you aren't sure pick one of
   the options below:
   * [Visual Studio Code](https://code.visualstudio.com/)

3. [Sign up](https://www.singlestore.com/try-free/) for a free SingleStore license. This allows you to run up to 4 nodes up to 32 gigs each for free. Grab your license key from [SingleStore portal](https://portal.singlestore.com/) and set it as an environment variable.

4. Create an encrypted secret for your `SINGLESTORE_LICENSE` on your GitHub repository.

   In your GitHub repository's GitHub Actions secrets, be sure to add your license.

   ```bash
   SINGLESTORE_LICENSE="singlestore license"
   ```

   You can learn more about how to setup secrets for your [GitHub Actions in the GitHub Actions documentation](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository). 

5. Run your GitHub actions by pushing your code to GitHub!

   The script creates a new connection to the SingleStore service. The script creates a table and populates it with placeholder data. To test that the SingleStore database contains the data, the script prints the contents of the table to the console log.

   When you run this workflow, you should see the following output in the "Connect to SingleStore" step, which confirms that you successfully created the SingleStore table and added data.

   And that is it! Now you can relax and commit your code and migrations as the deployment process is carried out automatically every time you push your code to your repository.

## Resources

* [SingleStore Documentation](https://docs.singlestore.com)
* [Learn GitHub Actions](https://docs.github.com/en/actions/learn-github-actions)
* [Twitter](https://twitter.com/SingleStoreDevs)
* Reach out to the [SingleStore forums](https://www.singlestore.com/forum).

## Contributing

Don't hesitate to create a pull request. Every contribution is appreciated.

1. Fork it!
2. Create your feature branch: ```git checkout -b my-new-feature```
3. Commit your changes: ```git commit -am 'Add some feature'```
4. Push to the branch: ````git push origin my-new-feature````
5. Submit a pull request :D

## LICENSE

### [Apache 2.0](./LICENSE)
 
