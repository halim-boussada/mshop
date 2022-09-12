const mongoose = require("mongoose");
const db = require("./connection.js");
mongoose.Promise = global.Promise;

const ShopOwnerSchema = new mongoose.Schema(
  {
    nameDeLaBoutique: { type: String },
    persone: { type: String },
    nomEtPrénomDuGestionnaireDeCompte: { type: String },
    numeroDeTelephone: { type: Number },
    email: { type: String },
    password: { type: String, required: true },
    unePlusieursBoutiques: { type: String },
    siOuiLaQuel: { type: String },
    siOuiPourquoi: { type: String },
    nomDeLaSociété: { type: String },
    adresse1: { type: String },
    codePostal: { type: String },
    ville: { type: String },
    pays: { type: String },
    prénomsEtNomDuPropriétaire: { type: String },
    deuxièmePrénomDuPropriétaire: { type: String },
    dateDeNaissance: { type: Date },
    pièceDidentité: { type: String },
    téléchargezUneCopieduPropriétaireDeLaSociété: { type: String },
    nombreDemployés: { type: Number },
    numéroDimmatriculation: { type: Number },
    télechargezUneCopieDuRegistreNationalDesEntreprises: { type: String },
    matriculeFiscal: { type: String },
    identifiantFiscal: { type: Number },
    TéléchargezUneCopieDeIdentificationFiscale: { type: String },
    country: { type: String },
    titulaireDuCompte: { type: String },
    nomDeLaBanque: { type: String },
    codeBancaire: { type: Number },
    codeIban: { type: Number },
    codeSwift: { type: Number },
    type: { type: String, default: "ShopOwner" },
  },
  {
    timestamps: true,
  }
);

const ShopOwner = mongoose.model("ShopOwner", ShopOwnerSchema);

module.exports = ShopOwner;
