class Api::BooksController < Api::BaseController
    def index
        @books = Book.all
    end
    def create
        
    end
    def destroy

    end
end
