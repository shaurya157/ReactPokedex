class Api::PokemonController < ApplicationController

  def index
    sleep 1
    @pokemon =  Pokemon.all
    render :index
  end

  def show
    sleep 1
    @pokemon = Pokemon.find_by_id(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)

    if @pokemon.valid?
      @pokemon.save
      render :show
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :poke_type, :image_url, moves: [])
  end
end
