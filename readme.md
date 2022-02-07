# Redis Singlestore Performance Test

This guide shows you workflow examples that configure a service container using the Docker Hub SingleStore image. The workflow runs a script that connects to the SingleStore service, creates a table, and then populates it with data. To test that the workflow creates and populates the SingleStore table, the script prints the data from the table to the console.

## Prerequisites

You should be familiar with how service containers work with GitHub Actions and the networking differences between running jobs directly on the runner or in a container. For more information, see "About service containers."

You may also find it helpful to have a basic understanding of YAML, the syntax for GitHub Actions, and PostgreSQL. For more information, see:

    "Learn GitHub Actions"
    "PostgreSQL tutorial" in the PostgreSQL documentation


## 1. Prepare your environment

Before we can start writing code, we need to make sure that your environment is
setup and ready to go.

1. Make sure you clone this git repository to your machine

   ```bash
   git clone https://github.com/singlestore-labs/singlestore-workshop-data-intensive-app.git
   ```

2. Make sure you have docker & docker-compose installed on your machine
  
* [docker](https://docs.docker.com/get-docker/)
* [docker-compose](https://docs.docker.com/compose/install/)

> ❗ **Note:** If you are following this tutorial on Windows or Mac OSX you may
> need to increase the amount of RAM and CPU made available to docker. You can
> do this from the docker configuration on your machine. More information:
> [Mac OSX documentation](https://docs.docker.com/docker-for-mac/#resources),
> [Windows documentation](https://docs.docker.com/docker-for-windows/#resources)
>
> ❗ **Note 2:** If you are following this tutorial on a Mac with the new M1
> chipset, it is unlikely to work. SingleStore does not yet support running on
> M1. We are actively fixing this, but in the meantime please follow along using
> a different machine.

1. A code editor that you are comfortable using, if you aren't sure pick one of
   the options below:
   * [Visual Studio Code](https://code.visualstudio.com/)

2. [Sign up](https://www.singlestore.com/try-free/) for a free SingleStore license. This allows you
   to run up to 4 nodes up to 32 gigs each for free. Grab your license key from
   [SingleStore portal](https://portal.singlestore.com/) and set it as an environment
   variable.

   ```bash
   export SINGLESTORE_LICENSE="singlestore license"
   ```

3. Start up your docker containers by running:

   ```bash
   docker compose up
   ```

4. Run the following command to start your performance test locally:

   ```bash
   npm start
   ```

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
