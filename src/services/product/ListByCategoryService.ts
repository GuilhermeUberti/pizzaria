import prismaClient from "../../prisma";

interface ListProductsRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({ category_id }: ListProductsRequest) {
        const findProductByCategory = await prismaClient.product.findMany({
            where: {
                category_id: category_id
            }
        })

        return findProductByCategory;
    }
}

export { ListByCategoryService }