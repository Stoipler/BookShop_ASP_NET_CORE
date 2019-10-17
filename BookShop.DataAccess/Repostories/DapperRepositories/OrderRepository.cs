using BookShop.DataAccess.AppContext;
using BookShop.DataAccess.Entities;
using BookShop.DataAccess.Models.RequestParameters;
using BookShop.DataAccess.Repostories.DapperRepositories.Base;
using BookShop.DataAccess.Repostories.Interfaces;
using Dapper;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BookShop.DataAccess.Repostories.DapperRepositories
{
    public class OrderRepository : BaseRepository<Order>, IOrderRepository
    {
        public OrderRepository(ApplicationContext context) : base(context)
        {
        }

        public async Task<(List<Order>, int)> GetByParmeters(OrderRequestParameters parameters)
        {
            int count = default(int);
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template sqlExpression = sqlBuilder.AddTemplate($@"SELECT * FROM Orders
            LEFT JOIN AspNetUsers ON Orders.ApplicationUserId = AspNetUsers.Id
            /**where**/
            /**orderby**/
            ");

            if (!string.IsNullOrWhiteSpace(parameters.KeyWord))
            {
                parameters.KeyWord = parameters.KeyWord.ToLower();
                sqlBuilder.Where($@"LOWER(AspNetUsers.FirstName + ' ' + AspNetUsers.FirstName + ' ' + AspNetUsers.UserName ) LIKE '%' + @KeyWord + '%'");
            }
            count = await _connection.ExecuteScalarAsync<int>(sqlExpression.RawSql, parameters);

            sqlBuilder.OrderBy("Orders.Id OFFSET ((@Page-1)*@PageSize) ROWS FETCH NEXT @PageSize ROWS ONLY");


            List<Order> result = new List<Order>();
            await _connection.QueryAsync<Order, ApplicationUser, Order>(sqlExpression.RawSql,
                (order, applicationUser) =>
                {
                    Order orderEntity = result.FirstOrDefault(item => item.Id == order.Id);

                    if (orderEntity is null)
                    {
                        orderEntity = new Order();
                        orderEntity = order;
                        orderEntity.ApplicationUser = applicationUser;
                        result.Add(orderEntity);
                    }
                    return order;
                }, parameters);

            return (result, count);
        }

        public async Task<List<Order>> GetRangeByUserId(int id)
        {
            SqlBuilder sqlBuilder = new SqlBuilder();

            SqlBuilder.Template sqlExpression = sqlBuilder.AddTemplate($@"SELECT * FROM Orders
            LEFT JOIN AspNetUsers ON Orders.ApplicationUserId = AspNetUsers.Id
            WHERE AspNetUsers.Id = @Id
            ");

            List<Order> result = new List<Order>();
            await _connection.QueryAsync<Order, ApplicationUser, Order>(sqlExpression.RawSql,
                (order, applicationUser) =>
                {
                    Order orderEntity = result.FirstOrDefault(item => item.Id == order.Id);

                    if (orderEntity is null)
                    {
                        orderEntity = new Order();
                        orderEntity = order;
                        orderEntity.ApplicationUser = applicationUser;
                        result.Add(orderEntity);
                    }
                    return order;
                }, new { Id = id });

            return result;
        }
    }
}
