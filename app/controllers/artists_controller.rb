# coding: utf-8
require 'json'

class ArtistsController < ApplicationController
  def index
    @artists = Artist.all.map do |a|
      a.attributes
    end
  end

  def create
    n = params['name']
    i = params['instrument']
    a = params['arsonist']

    Artist.create(:name => n, :instrument => i, :arsonist => (a == 'true' ? 1 : 0))
    redirect_to '/artists'
  end

  def destroy
    Artist.destroy_existing(params[:id])
    
    redirect_to '/artists'
  end
end
