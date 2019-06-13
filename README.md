# TSUtil
A simple util to automatically import sequelize models and generate ts interfaces

Sequelize natively supports casting to a ts class declarition. This script creates interfaces instead.

# HowTo
Add new models to model directory as [modelname].js. Both the db models and ts interfaces will be available with ES6 import after the migration util is run or on npm start




# Note
The sequelize import is a modified version of the official sequelize sample repo. The ts interface import is a custom module.