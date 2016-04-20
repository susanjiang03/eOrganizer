'use strict';

module.exports = function(sequelize, DataTypes) {

	var Article = sequelize.define('Article', {
			title: DataTypes.STRING,
			content: DataTypes.TEXT,
			isPrivate: DataTypes.BOOLEAN,

            school: DataTypes.STRING,
			date: DataTypes.DATE,
			time: DataTypes.TIME,
			location: DataTypes.STRING,
			category: DataTypes.STRING,
			rewardCoins: DataTypes.INTEGER


		},
		{
			associate: function(models){
				Article.belongsTo(models.User);
			}
		}
	);

	return Article;
};
